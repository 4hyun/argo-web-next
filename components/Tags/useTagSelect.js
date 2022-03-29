import { useState } from 'react';

const useTagSelect = () => {
  const [tags, setTag] = useState(null);
  const handleTagToggle = (e, v) => {
    // console.log('handleTagToggle()');
    // console.log('>>DEBUG/useTag/ e: ', e);
    // console.log('>>DEBUG/useTag/ e.currentTarget: ', e.currentTarget);
    // console.log('>>DEBUG/useTag/ e.target: ', e.target);
    const { tagId, tagName } = e.target.dataset;
    if (!tagId) {
      console.warn(
        [
          `useTagSelect() hook requires tag-element targets to have "data-tag-id" and "data-tag-name" attributes set.`,
          `Aborting because "data-tag-id" is not set.`,
        ].join('\n'),
      );

      return;
    }
    if (!tagName) {
      console.warn(
        [
          `useTagSelect() hook requires tag-element targets to have "data-tag-id" and "data-tag-name" attributes set.`,
          `Aborting because "data-tag-name" is not set.`,
        ].join('\n'),
      );

      return;
    }
    const addTag = () =>
      setTag(prevTags => ({ ...(prevTags || {}), ...{ [tagId]: tagName } }));

    const removeTag = () =>
      setTag(prevTags => ({ ...(prevTags || {}), ...{ [tagId]: null } }));
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagId: ', tagId);
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagName: ', tagName);
    if (tagId in (tags || {})) {
      if (tags[tagId] == null) {
        addTag();
        return;
      }
      // console.log('>>DEBUG/useTag before setTag');
      removeTag();
      return;
      // console.log('>>DEBUG/useTag tags: ', tags);
    }
    addTag();
    // console.log('>>DEBUG/useTag tags: ', tags);
    // console.log('>>DEBUG/useTag/ v: ', v);
  };
  return [tags, handleTagToggle];
};

export default useTagSelect;
