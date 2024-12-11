// Define a component that accepts SVG element as a prop
interface Props {
    svgElement: React.ReactElement<React.SVGProps<SVGElement>>;
}

const SVGWrapper: React.FC<Props> = ({ svgElement }) => (
    <div>
        {svgElement}
    </div>
);

export default SVGWrapper;