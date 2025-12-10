function Picture({ src, alt, type, className }) {
  //   return <img src={`/${type}/${name}`} alt={alt} />;
  return (
    // <img src="/banner/banner-headphone.png" alt="head" className={className} />
    <img src={`/${type}/${src}`} alt={alt} className={className} />
  );
}

export default Picture;
// public\banner\banner-headphone.png
