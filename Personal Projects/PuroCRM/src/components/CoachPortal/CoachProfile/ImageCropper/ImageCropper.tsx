"use client";

import React, { useState, useRef } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
// import { canvasPreview } from './canvasPreview'
// import { useDebounceEffect } from './useDebounceEffect'

import "react-image-crop/dist/ReactCrop.css";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

interface Props {
  imgValue: string;
  scale: number;
  rotate: number;
}

export default function ImageCropper({ imgValue, scale, rotate }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);

  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const [aspect, setAspect] = useState<number | undefined>(9 / 11);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  return (
    <div className="container">
      {!!imgValue && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop: any) => setCrop(percentCrop)}
          onComplete={(c: any) => setCompletedCrop(c)}
          aspect={aspect}
          // minWidth={400}
          minHeight={200}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgValue}
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
    </div>
  );
}
