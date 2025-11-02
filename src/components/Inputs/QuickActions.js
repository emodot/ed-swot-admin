export default function QuickActions({actions}) {


  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`flex items-center gap-2 px-6 py-3 rounded-[8px] border ${action.bg} ${action.border} ${action.hover} transition-all font-aileron_sb text-14 text-brand_secondary`}
          >
            {action.label}
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
