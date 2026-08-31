import { useEffect, useState } from "react";

interface UseTypingEffectOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypingEffect(
  texts: string | string[],
  {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
    loop = true,
  }: UseTypingEffectOptions = {}
) {
  const textList = Array.isArray(texts) ? texts : [texts];

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = textList[textIndex];

    // Finished typing
    if (!isDeleting && text === currentText) {
      setIsTyping(false);
      setIsPaused(true);

      const timeout = setTimeout(() => {
        setIsPaused(false);

        if (loop || textIndex < textList.length - 1) {
          setIsDeleting(true);
        }
      }, pauseDuration);

      return () => clearTimeout(timeout);
    }

    // Finished deleting
    if (isDeleting && text === "") {
      if (textIndex < textList.length - 1) {
        setTextIndex((prev) => prev + 1);
        setIsDeleting(false);
        setIsTyping(true);
      } else if (loop) {
        setTextIndex(0);
        setIsDeleting(false);
        setIsTyping(true);
      }

      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setIsDeleting(true);
        setIsTyping(false);

        setText((prev) => prev.slice(0, -1));
      } else {
        setIsTyping(true);
        setIsDeleting(false);

        setText(currentText.slice(0, text.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    text,
    textIndex,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    textList,
  ]);

  return {
    text,
    isTyping,
    isDeleting,
    isPaused,
    textIndex,
  };
}