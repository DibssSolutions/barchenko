const reviewImages = $('.js-review-images');
reviewImages.each((i,el) => {
  const imagesContainer = $(el);
  const images = imagesContainer.find('.js-review-image');
  const image5 = imagesContainer.find('.js-review-image:nth-child(5)');
  const lengthPlus = images.length - 5;
  const imageLengthContainer = `<span class="review-image-lenght"><span>+</span> ${lengthPlus}<span>`;

  if (images.length > 5) image5.append(imageLengthContainer);
});
