const TextWithIcon = ({ iconSrc, alt, text }) => {
  return (
    <div className="flex items-start gap-2">
      <img src={iconSrc} alt={alt} className="w-5 h-5" />
      <p className="text-sm text-gray-800 leading-tight whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};

export default TextWithIcon;
