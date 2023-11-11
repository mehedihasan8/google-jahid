import { motion, AnimatePresence } from "framer-motion"

export default function PageWraper({ children }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}