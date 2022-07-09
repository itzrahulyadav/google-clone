
function Footer() {
  return (
    <footer className = "grid w-full divide-y-[2px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className = 'px-8 py-3'>
          India
        </div>
        <div className = "grid grid-cols-1 md:grid-cols-2">
          <div className = "flex  justify-center space-x-5 py-5">
             <a className = "link" href = ""> About</a>
             <a className = "link" href = ""> Advertising</a>
             <a className = "link" href = ""> Business</a>
             <a className = "link" href = ""> How Search Works</a>
          </div>
          <div className = "flex  justify-center space-x-5  pb-2 md:py-5 md:pb-0">
            <a className = "link" href = "">Privacy</a>
            <a className = "link" href = "">Terms</a>
            <a className = "link" href = "">Settings</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer