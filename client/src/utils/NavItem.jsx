const NavItem = ({ icon: Icon, label, description, isActive, onClick, showLabel }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-blue-500/10 text-blue-400'
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      <div className="flex items-center">
        <Icon size={16} />
        {showLabel && (
          <div className="ml-3 text-left">
            <span className="block">{label}</span>
            {description && (
              <span className="text-xs text-gray-500">{description}</span>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

export default NavItem;