import spinner from "../assets/svg/Ellipsis-1s-200px.svg"

export default function Spinner() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#f1f2f4] fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="w-36" />
      </div>
    </div>
  )
}
