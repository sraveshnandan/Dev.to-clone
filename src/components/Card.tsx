const Card = ({ children, containerStyles  }: ChildrenType) => {
  return (
    <>
      {/* wrapper  */}
      <div className={`bg-white rounded-lg ${containerStyles}  `}>
        {children}
      </div>

    </>
  )
}

export default Card