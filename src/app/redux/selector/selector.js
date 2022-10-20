import { createSelector } from "reselect";

export const isAuthSelector = (state) => state.auth.dataUser;

export const isLoadingAuthSelector = (state) => state.auth.isLoading;

// export const homeContentSelector = createSelector(
//   imagesSelector,
//   dataLoadingSelector,
//   dataSelector,
//   (images, loading, data, type) => ({
//     images,
//     type,
//     loading,
//     canvasItems: data.canvasItems,
//     caseColor: data.caseColor,
//     playgroundImgs: data.playgroundImgs,
//     playgroundText: data.playgroundText,
//     activePlaygroundImage: data.activePlaygroundImage,
//     activePlaygroundText: data.activePlaygroundText,
//     preview: data.preview,
//     blobShadows: data.blobShadows,
//     blobOverlay: data.blobOverlay,
//     blobBackground: data.blobBackground,
//     blobMask: data.blobMask,
//     price: data.price,
//     previewMode: data.previewMode,
//     constructor: data.dashDot,
//     itemType: data.type,
//     category: data.category,
//     predefinedImages: data.predefinedImages,
//     helpEditText: data.helpEditText,
//   })
// );
