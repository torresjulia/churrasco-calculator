import React, { useEffect } from "react";

interface ClarityAnalyticsProps {
  projectId: string;
}

const ClarityAnalytics: React.FC<ClarityAnalyticsProps> = ({ projectId }) => {
  useEffect(() => {
    // Adiciona o script do Clarity ao head do documento
    const script = document.createElement("script");
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `;
    document.head.appendChild(script);

    // Cleanup function para remover o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, [projectId]);

  return null; // Este componente não renderiza nada
};

export default ClarityAnalytics;
