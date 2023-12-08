document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementsByClassName('close')[0];

  images.forEach(img => {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  closeBtn.onclick = function() { 
    modal.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');
  const imagePaths = [
 ];

 for (let i = 0; i < 16; i++) {
  imagePaths.push(`../assets/gallery/gallery${i}.jpg`);
 }

  imagePaths.forEach(path => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = path;
    img.alt = 'Some description';
    img.classList.add('gallery-img');

    imgContainer.appendChild(img);
    galleryContainer.appendChild(imgContainer);

    img.onclick = function(){
      const modal = document.getElementById('myModal');
      const modalImg = document.getElementById('img01');
      const captionText = document.getElementById('caption');
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  const closeBtn = document.querySelector('.close');
  closeBtn.onclick = function() { 
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
});

