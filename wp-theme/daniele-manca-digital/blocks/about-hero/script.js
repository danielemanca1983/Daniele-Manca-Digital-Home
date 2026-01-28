import { registerBlockType } from '@wordpress/blocks';

registerBlockType('daniele-manca/about-hero', {
  edit: (props) => {
    const { attributes, setAttributes } = props;

    return (
      <div className="wp-block-daniele-manca-about-hero">
        <label>
          Status Text:
          <input
            type="text"
            value={attributes.statusText || ''}
            onChange={(e) => setAttributes({ statusText: e.target.value })}
          />
        </label>
        
        <label>
          Main Heading:
          <textarea
            value={attributes.mainHeading || ''}
            onChange={(e) => setAttributes({ mainHeading: e.target.value })}
          />
        </label>

        <label>
          Intro Text:
          <textarea
            value={attributes.introText || ''}
            onChange={(e) => setAttributes({ introText: e.target.value })}
          />
        </label>

        <label>
          Highlight Text:
          <textarea
            value={attributes.highlightText || ''}
            onChange={(e) => setAttributes({ highlightText: e.target.value })}
          />
        </label>

        <label>
          Closing Text:
          <textarea
            value={attributes.closingText || ''}
            onChange={(e) => setAttributes({ closingText: e.target.value })}
          />
        </label>
      </div>
    );
  },

  save: () => null,
});
