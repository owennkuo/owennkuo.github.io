function showImage(button) {
  let urls = {
    basement: 'basement.svg',
    floor1: 'floor1.svg',
    floor2: 'floor2.svg'
  };
  let img = document.getElementById('display-area');
  img.src = urls[button.id]
}

