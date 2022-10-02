export const images = [
    `https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg`,

    `https://ideascdn.lego.com/media/generate/lego_ci/6af92131-f4b2-44ae-bdab-f5c085421117/resize:950:633/legacy`,
    
    `https://imageio.forbes.com/specials-images/imageserve/63034506593d7b2d3cf3e7ef/Dusty--barred-spiral-galaxy-NGC-1365-as-captured-by-JWST-s-MIRI-instrument--and/960x0.jpg?format=jpg&width=960`,

    `https://images.immediate.co.uk/production/volatile/sites/4/2022/07/JWST-image-showing-eight-point-stars-a6d61b1.jpg?resize=960,413?quality=90&resize=940,400`

    `https://www.siliconrepublic.com/wp-content/uploads/2022/06/Webb_wallpaper-718x523.jpg`
    
]

export function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}