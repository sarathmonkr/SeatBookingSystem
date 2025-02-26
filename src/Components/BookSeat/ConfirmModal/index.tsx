interface BookingConfirmModalPropsType{
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const BookingConfirmModal = ({
isOpen,
onCancel,
onConfirm,
}: BookingConfirmModalPropsType) => {
  
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg border border-black-500 ">
          <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
          <p className="mb-4">Are you sure you want to confirm this booking?</p>
          <div className="flex justify-end">
            <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2 cursor-pointer" onClick={onCancel}>Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingConfirmModal