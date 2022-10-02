import { SET_IMAGE_URL, SET_IMAGE_DIMENSION } from "../constants";
import { getRandomImage } from "../images";

const dimension = { width: 400, height: 400 };

const defaultState = {
  ...dimension,
  // url: `https://wp.technologyreview.com/wp-content/uploads/2022/07/STScI-01G7DB1FHPMJCCY59CQGZC1YJQ-crop.png`,
  // url: `https://t3.ftcdn.net/jpg/02/94/95/60/360_F_294956053_24WVxUHoVz4FOD094POK04d8d8aWYVKQ.jpg`
  url: getRandomImage(),
  // url: `https://unsplash.it/${dimension.width}/${dimension.height}`
};

window.onload = () => {
  defaultState.url = getRandomImage();
};

export function getMeta() {
  var img = new Image();
  const dimensions = {};
  img.src = defaultState.url;
  img.onload = function () {
    dimensions.width = img.width;
    dimensions.height = img.height;
  };

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
