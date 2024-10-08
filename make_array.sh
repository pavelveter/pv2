#!/bin/zsh

dir="$1"

# Функция для получения ширины и высоты изображения
get_image_dimensions() {
    local image_path="$1"
    
    # Проверка на существование файла
    if [[ ! -f "$image_path" ]]; then
        echo "Файл не найден: $image_path"
        return 1
    fi

    # Использование exiftool для извлечения ширины и высоты
    dimensions=$(exiftool -s3 -ImageWidth -ImageHeight "$image_path")
    
    # Проверка на наличие результатов
    if [[ -z "$dimensions" ]]; then
        echo "Не удалось получить размеры изображения."
        return 1
    fi

    # Извлечение ширины и высоты
    width=$(echo "$dimensions" | awk 'NR==1{print}')
    height=$(echo "$dimensions" | awk 'NR==2{print}')

    echo "width: $width, height: $height"
}

# Проход по всем файлам JPG в директории
for jpg in $(find "${dir}" -type f ! -name "*_*" | sort); do
    dimensions=$(get_image_dimensions "${jpg}")
    
    # Проверяем успешность получения размеров
    if [[ $? -eq 0 ]]; then
        orig="{src: \"/${jpg}\", $dimensions"

        # Извлекаем имя файла без расширения
        base_name=$(basename "${jpg}" .jpg)
        
        # Поиск уменьшенных копий
        thumb_files=$(find "${dir}" -type f -name "${base_name}_*x*" | sort)
        
        # Проверка наличия уменьшенных копий
        if [[ -n "$thumb_files" ]]; then
            # Выводим оригинал
            echo "${orig},"
            echo "srcSet: ["
            for thumbs in $thumb_files; do
                # Извлекаем размеры уменьшенной копии
                thumb_dimensions=$(get_image_dimensions "${thumbs}")
                
                # Вывод данных для уменьшенной копии
                echo "{src: \"/${thumbs}\", $thumb_dimensions},"
            done
            echo "],},"
        else
            echo "${orig}},"
        fi
        
    fi
done
