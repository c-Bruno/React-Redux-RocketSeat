export function toggleLeasson(module, lesson) {
    return {
      type: "TOGGLE_LESSON",
      module,
      lesson,
    };
  }