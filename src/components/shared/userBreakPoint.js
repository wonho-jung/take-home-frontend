import { useEffect, useState } from "react";

export const useBreakPoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const hasBreakPoint = () => {
      const screenWidth = window.innerWidth;

      setIsMobile(screenWidth < 640);
      setIsTablet(screenWidth >= 640 && screenWidth < 1024);
      setIsDesktop(screenWidth >= 1024);
    };
    window.addEventListener("resize", hasBreakPoint);
    hasBreakPoint();
    return () => window.removeEventListener("resize", hasBreakPoint);
  }, []);

  // Return both the height and width
  return { isMobile, isTablet, isDesktop };
};
