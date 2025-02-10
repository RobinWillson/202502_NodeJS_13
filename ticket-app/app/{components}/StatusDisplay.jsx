const StatusDisplay = ({ status }) => {
  const statusBGColors = (status) => {
    let color = '';
    switch (status) {
      // case 'Not Started':
      //   return 'bg-green-200 text-green-900';
      case 'in progress':
        return 'bg-yellow-200 ';
      case 'Completed':
        return 'bg-green-200 ';
      default:
        return 'bg-gray-200 text-gray-400';
    }
    return color;
  };
  return (
    <span className={ `inline-block rounded-full px-2 py-1 text-xs font-semibold text-green-900 ${statusBGColors(status)}` }>
      { status }
    </span>
  );
};

export default StatusDisplay;;