import { utilityFunction } from './utilities.js';
import { handleEvent } from './eventHandlers.js';
import { processData } from './dataProcessing.js';

document.addEventListener('DOMContentLoaded', () => {
    utilityFunction();
    handleEvent();
    processData();
});
