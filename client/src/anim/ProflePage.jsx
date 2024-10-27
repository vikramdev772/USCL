import { motion } from 'framer-motion';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 flex items-center justify-between">
        <motion.img 
          src="/path-to-profile-pic.jpg" 
          alt="Profile Picture" 
          className="w-24 h-24 rounded-full border-4 border-blue-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1 
          className="text-3xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello, [User Name]!
        </motion.h1>
      </header>
      
      <main className="p-6 space-y-4">
        <motion.section 
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-blue-400">Personal Details</h2>
          {/* Personal details content */}
        </motion.section>

        <motion.section 
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-blue-400">Education</h2>
          {/* Education content */}
        </motion.section>

        <motion.section 
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-blue-400">Skills</h2>
          {/* Skills content */}
        </motion.section>
      </main>
      
      <footer className="p-6 text-center">
        <motion.div
          className="space-x-4"
          whileHover={{ rotate: 5 }}
        >
          {/* Social media icons */}
        </motion.div>
      </footer>
    </div>
  );
};

export default ProfilePage;
