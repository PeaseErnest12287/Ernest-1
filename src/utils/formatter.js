export default (content) => {
    const border = '═'.repeat(28);
    return `
  ╔${border}╗
  ║  ERNEST V3  ${new Date().toLocaleTimeString()}  ║
  ╟${border}╢
  ${typeof content === 'string' ? content : JSON.stringify(content, null, 2)}
  ╚${border}╝
  > Created by Pease Ernest
  `;
  };