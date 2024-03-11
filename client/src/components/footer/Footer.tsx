
function Footer() {
  return (
    <footer className="bg-primary-blue py-20 px-2">
        <div className="container mx-auto flex flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-white tracking-tight">nexStay</h1>
            <ul className="flex flex-row gap-5 text-white">
                <li><span>Privacy Policy</span></li>
                <li><span>Terms and Conditions</span></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer