// components/AchievementsSection.jsx

import { FaBuilding, FaMoneyBillWave, FaUserTie, FaRegCalendarCheck } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaBuilding className="w-10 h-10 mb-2" />,
    number: '50+',
    label: 'Operating Companies',
  },
  {
    icon: <FaMoneyBillWave className="w-10 h-10 mb-2" />,
    number: '1 Trillion',
    label: 'Combined Annual Revenues',
  },
  {
    icon: <FaUserTie className="w-10 h-10 mb-2" />,
    number: '15+',
    label: 'Professionals',
  },
  {
    icon: <FaRegCalendarCheck className="w-10 h-10 mb-2" />,
    number: '2002',
    label: 'Founded by C.A. M.K. Khandelwal',
  },
];

export default function AchievementsSection() {
  return (
    <section
      className="bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://www.chandracredit.com/Images/6.jpg')",
      }}
    >
      <div className="py-16" style={{ backgroundColor: 'rgba(42, 130, 184, 0.86)' }}>
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-2xl font-bold">{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
