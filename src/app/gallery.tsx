'use client'

import BlurFade from '@/components/magicui/blur-fade'
import { DATA } from '@/data/resume'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from 'react-photo-album'
import { UnstableSSR as SSR } from 'react-photo-album/ssr'
import 'react-photo-album/rows.css'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import { shuffledPhotos, aPhoto } from '@/data/photos'

const BLUR_FADE_DELAY = 0.06

// рендер NextJS для альбома
function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
      />
    </div>
  )
}

export default function Gallery({ section }) {
  const [index, setIndex] = useState(-1)
  const [photoState, setPhotoState] = useState(Object.keys(shuffledPhotos)[0])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPhotoAlbum, setCurrentPhotoAlbum] = useState<aPhoto[]>([])

  useEffect(() => {
    setCurrentPhotoAlbum(
      shuffledPhotos[photoState as keyof typeof shuffledPhotos] ??
        Object.values(shuffledPhotos)[0]
    )
    setIsLoading(false)
  }, [photoState])

  const handlePhotoStateChange = (newState: string) => {
    setPhotoState(newState)
    setIndex(-1)
  }
  return (
    <div>
      <section id="photos">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-2">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {DATA.slideshow}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {DATA.howishoot}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"></p>
            </div>
          </BlurFade>
        </div>
        {/* --- меню --- */}
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex justify-center space-x-4 my-6 flex-wrap">
            {Object.keys(shuffledPhotos).map(albumName => (
              <button
                key={albumName}
                className={`mb-4 px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors fade-transition ${
                  photoState === albumName
                    ? 'bg-foreground text-background'
                    : 'bg-background text-foreground border border-foreground'
                }`}
                onClick={() => handlePhotoStateChange(albumName)}
              >
                {albumName}
              </button>
            ))}
          </div>
        </BlurFade>
        {/* IMPORTANT: --- галерея --- */}
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          {/* // 256 – размер тамбнейлов */}
          <SSR breakpoints={[300, 600, 900, 1200]}>
            <RowsPhotoAlbum
              photos={currentPhotoAlbum}
              render={{ image: renderNextImage }}
              onClick={({ index }) => setIndex(index)}
              defaultContainerWidth={624}
            />
          </SSR>
        </BlurFade>
        {/* --- лайтбокс --- */}
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <Lightbox
            slides={currentPhotoAlbum}
            open={index >= 0}
            index={index}
            controller={{
              closeOnPullDown: true,
              closeOnPullUp: true,
              closeOnBackdropClick: true,
            }}
            close={() => setIndex(-1)}
          />
        </BlurFade>
      </section>
    </div>
  )
}
