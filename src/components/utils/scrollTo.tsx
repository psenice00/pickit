
export const scroolToElement = (id: string) => {
    const violation = document.getElementById(id);
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (violation !== null) {
        violation.scrollIntoView({ behavior: 'smooth' /*or smooth*/, block: width >= 960 ? 'center' : 'start' });
    }
}