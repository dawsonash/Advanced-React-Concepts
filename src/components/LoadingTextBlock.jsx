function LoadingTextBlock({ loading, title, text }) {
    return (
      <div className='flex h-16 p-4 flex-col justify-center items-start gap-2'>
        {loading ? (
          <>
            <div className="h-4 bg-gray-200 rounded w-26 animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded w-90 animate-pulse" />
          </>
        ) : (
          <div className='text-left font-body'>
            <h3 className='font-heading pb-2 overflow-hidden whitespace-nowrap max-w-26'>{title}</h3>
            <p className="truncate max-w-90">{text}</p>
          </div>
        )}
      </div>
    );
  } export default LoadingTextBlock