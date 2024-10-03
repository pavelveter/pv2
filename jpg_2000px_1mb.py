import os
import subprocess
from PIL import Image

# Устанавливаем максимальные размеры и вес
MAX_WIDTH = 2000
MAX_SIZE_MB = 1

# Получаем список всех JPG/JPEG файлов в текущей директории
for filename in os.listdir('.'):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        # Открываем изображение
        img = Image.open(filename)
        width, height = img.size
        
        # Проверяем, если одна из сторон больше 2000 пикселей
        if width > MAX_WIDTH or height > MAX_WIDTH:
            # Изменяем размер изображения
            img.thumbnail((MAX_WIDTH, MAX_WIDTH))
            img.save(filename)
            print(f'Изменён размер: {filename}')
        else:
            print(f'Размер уже подходит: {filename}')
        
        # Сжимаем изображение до менее 1 МБ, если это нужно
        filesize = os.path.getsize(filename) / (1024 * 1024)
        if filesize > MAX_SIZE_MB:
            subprocess.run(['jpegoptim', '--max=1000', filename])
            print(f'Сжатие файла: {filename}')
        else:
            print(f'Файл уже менее 1 МБ: {filename}')
