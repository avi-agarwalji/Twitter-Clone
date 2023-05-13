export default function Avatar({ profileIcon, color }) {
  return (
    <div>
      <span
        className={`inline-block text-xl font-semibold text-white ${color} px-4 py-2 rounded-full`}
      >
        {profileIcon}
      </span>
    </div>
  );
}
