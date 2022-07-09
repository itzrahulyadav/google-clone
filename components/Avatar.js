function Avatar({url,className}) {

  return (
    <img loading = 'lazy'
    src = {url}
    alt = "profile pic"
    className={`h-10 rounded-full transition duration-150 transform hover:scale-110 cursor-pointer ${className}`}
     />
  )
}

export default Avatar