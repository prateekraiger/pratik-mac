import WindowsControls from "#components/WindowsControls";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  const imageUrl = data?.image || data?.imageUrl || data?.icon;

  return (
    <>
      <div id="window-header">
        <WindowsControls target="imgfile" />
        <p className="font-bold text-sm text-center flex-1">Image Preview</p>
      </div>

      <div className="preview">
        {imageUrl ? (
          <img src={imageUrl} alt="Preview" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No image selected
          </div>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
