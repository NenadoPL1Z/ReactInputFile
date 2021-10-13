export const handleClick = (ref) => {
  ref.current.click();
}

export const handleChange = (e, imageArr, setImgArr) => {
  const {files} = e.target

  const fileArray = Array.from(files);

  fileArray.forEach((image, index) => {
    if (!image.type.match('image')) return;

    //? Работа с файлами
    const reader = new FileReader();
    const finalArr = []

    //? Событие которое срабатывает, после считывания файла
    reader.onload = (ev) => {
      const dataObj = {
        id: imageArr.length + 1,
        name: image.name,
        src: ev.target.result
      }
      console.log(image);
      setImgArr(prev => [...prev, dataObj])
    }

    //? Читаем файл
    reader.readAsDataURL(image);
  })
}
