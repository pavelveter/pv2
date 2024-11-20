'use client'

import React, { useEffect, useState } from 'react'

import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import Link from 'next/link'
import Markdown from 'react-markdown'
import Gallery from './gallery'

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  const [section, setSection] = useState<string | undefined>()

  useEffect(() => {
    // Функция для обновления секции на основе хеша URL
    const updateSectionFromHash = () => {
      const hash = window.location.hash.slice(1) // Убираем '#'
      setSection(hash || '0') // Используем '0' или значение хеша
    }

    // Обновляем раздел при первом рендере
    updateSectionFromHash()
    // Слушаем изменения в URL
    window.addEventListener('hashchange', updateSectionFromHash)

    // Чистим слушатель при размонтировании компонента
    return () => window.removeEventListener('hashchange', updateSectionFromHash)
  }, [])
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* --- герой --- */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.hello}${DATA.name.split(' ')[0]} 📸`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.main}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* --- интро --- */}
      <section id="intro">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* --- фотки ---*/}
      <Gallery section={section} />
      {/* --- кто учил --- */}
      <section id="who">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.teachers}
          </Markdown>
        </BlurFade>
      </section>
      {/* --- с кем работал --- */}
      <section id="clients">
        <BlurFade delay={BLUR_FADE_DELAY * 24}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.clients}
          </Markdown>
        </BlurFade>
      </section>
      {/* --- контакты --- */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {DATA.contacts}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {DATA.talk}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {DATA.request_start}{' '}
                <Link
                  href={DATA.contact.social.Telegram.url}
                  className="text-blue-500 hover:underline"
                >
                  {DATA.contact.social.Telegram.name}
                </Link>{' '}
                {DATA.request_end}
              </p>
            </div>
            <div className="h-10" />
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
