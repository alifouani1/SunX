import { SET_IMAGE_URL, SET_IMAGE_DIMENSION } from "../constants";

const dimension = { width: 400, height: 400 };

const defaultState = {
  ...dimension,
  // url: `https://wp.technologyreview.com/wp-content/uploads/2022/07/STScI-01G7DB1FHPMJCCY59CQGZC1YJQ-crop.png`,
  // url: `https://t3.ftcdn.net/jpg/02/94/95/60/360_F_294956053_24WVxUHoVz4FOD094POK04d8d8aWYVKQ.jpg`
  url: `https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg`,
  // url: `https://unsplash.it/${dimension.width}/${dimension.height}`
};

export function getMeta() {
  var img = new Image();
  const dimensions = {};
  img.src = defaultState.url;
  img.onload = function () {
    console.log(img);
    console.log(this);
    dimensions.width = img.width;
    dimensions.height = img.height;
  };
  console.log(img);
  console.log(this);

  return dimensions;
}

getMeta();
// console.log(dimensions);

const imageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IMAGE_DIMENSION:
      const { width, height } = action.payload;
      return { ...state, width, height };
    case SET_IMAGE_URL:
      const url = action.payload;
      return { ...state, url };
    default:
      return state;
  }
};

export default imageReducer;
