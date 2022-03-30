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
      setTag(prevTags => ({
        tags: {
          ...(prevTags == null ? { tags: {} } : prevTags.tags),
          ...{ [tagId]: tagName },
        },
        selected:
          prevTags == null ? new Set([tagId]) : prevTags.selected.add(tagId),
      }));

    const removeTag = () => {
      setTag(prevTags => {
        let selected;
        if (prevTags == null) selected = new Set();
        else {
          selected = new Set(prevTags.selected.values());
          selected.delete(tagId);
        }
        return {
          tags: {
            ...(prevTags == null ? { tags: {} } : prevTags.tags),
            ...{ [tagId]: null },
          },
          selected,
        };
      });
    };
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagId: ', tagId);
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagName: ', tagName);
    // console.log('>>DEBUG/useTag/tags: ', tags);
    if (tagId in (tags ? tags.tags : { tags: {} })) {
      if (tags.tags[tagId] == null) {
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
