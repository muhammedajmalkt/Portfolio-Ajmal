
// const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
//   const animationDuration = `${speed}s`;

//   return (
//     <div
//       className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
//       style={{ animationDuration }}
//     >
//       {text}
//     </div>
//   );
// };

// export default ShinyText;

const ShinyText = ({ text, children, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text || children}
    </div>
  );
};

export default ShinyText;

