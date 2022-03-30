import { useState } from 'react';

const useTagSelect = () => {
  const [state, setState] = useState(null);
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
      setState(prevState => {
        let tags, selected;
        if (prevState == null) {
          tags = { [tagId]: tagName };
          selected = [tagId];
        } else {
          tags = { ...prevState.tags, [tagId]: tagName };
          selected = [...prevState.selected, tagId];
        }
        return { tags, selected };
      });

    const removeTag = () =>
      setState(prevState => {
        let tags, selected;
        if (prevState == null) {
          return;
        } else {
          tags = { ...prevState.tags };
          tags[tagId] = null;
          let indexToRemove = prevState.selected.indexOf(tagId);
          selected = [...prevState.selected];
          if (indexToRemove > -1) selected.splice(indexToRemove, 1);
          return { tags, selected };
        }
      });

    // console.log('>>DEBUG/useTag/ e.target.dataset.tagId: ', tagId);
    // console.log('>>DEBUG/useTag/ e.target.dataset.tagName: ', tagName);
    // console.log('>>DEBUG/useTag/tags: ', tags);
    if (tagId in (state ? state.tags : {})) {
      console.log('>>DEBUG tags.tags: ', state.tags);
      if (state.tags[tagId] == null) {
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
  return [state, handleTagToggle];
};

export default useTagSelect;
