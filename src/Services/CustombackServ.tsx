/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

declare global {
  interface Window {
    tizen: any;
  }
}
const TizenBackButton = () => {
  useEffect(() => {
    const handleBackButton = (e: any) => {
      // Check if the key is the back button
      if (e.keyName === 'back') {
        // Logic for exiting or going back
        if (window.history.length > 1) {
          window.history.back();
        } else {
          // If no back history, exit application
          if (window.tizen && window.tizen.application) {
            window.tizen.application.getCurrentApplication().exit();
          }
        }
      }
    };

    // Add listener
    document.addEventListener('tizenhwkey', handleBackButton);

    // Cleanup listener
    return () => {
      document.removeEventListener('tizenhwkey', handleBackButton);
    };
  }, []);

  return <div>My Tizen App</div>;
};
export default TizenBackButton;