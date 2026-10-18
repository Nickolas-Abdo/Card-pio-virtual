"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** Imagem com fallback elegante caso a foto não carregue. */
export function SafeImage({ alt, className, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-surface-2 to-line text-4xl ${props.fill ? "absolute inset-0" : ""} ${className ?? ""}`}
      >
        🍔
      </div>
    );
  }

  return <Image alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
