import './Box.scss';
import FaIcon from '../FaIcon';
import { Col, Panel, Row } from 'rsuite';
import PanelLoader from '../PanelLoader';
import { FC, useState, useEffect } from 'react';
import { classNames } from '../../Tools/Utils/React';

type BoxProps = {
    // Box have shadow or not(default:true)
    shaded?: boolean;

    // loading or not(default:false)
    loading?: boolean;

    // optional className
    className?: string;

    // Box expandable or not(default:false)
    expandable?: boolean;

    // header which place left
    header?: string | any;

    // right side of header which can be buttons, button, ...
    rightSideHeader?: any;

    // message or component place top right of the panel
    componentTopRight?: any;

    // hove shadow when hover box or not(default:false)
    shadowOnHover?: boolean;

    // show expand icon(angle icon) or not(default:false)
    showExpandIcon?: boolean;

    // set default expand true/false(default:true)
    defaultExpanded?: boolean;

    onChange?: (expanded: boolean) => void;

    // background color(default:'bg-white')
    bgColor?: 'bg-transparent' | 'bg-white';

    // handling size of each part(default: mobile(each side 24/24)/ ipad(left:10/24,right:14/24)/ desktop(each side 12/24)
    headerBreakPoints?: { right?: BreakPoint; left?: BreakPoint };
};

type BreakPoint = { xs?: number; sm?: number; md?: number; lg?: number };

const Box: FC<BoxProps> = ({
    header,
    children,
    onChange,
    className,
    loading = false,
    shaded = true,
    rightSideHeader,
    componentTopRight,
    expandable = false,
    shadowOnHover = false,
    bgColor = 'bg-white',
    showExpandIcon = false,
    defaultExpanded = true,
    headerBreakPoints = {
        left: { xs: !!rightSideHeader ? 18 : 24 },
        right: { xs: !!rightSideHeader ? 6 : 1 },
    },
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    useEffect(() => {
        onChange?.(expanded);
    }, [expanded]);

    // left col header breakpoints
    const left = headerBreakPoints?.left;

    // right col header breakpoints
    const right = headerBreakPoints?.right;

    const boxHeader = header ? (
        <Row onClick={() => setExpanded(s => !s)} className={classNames('box-header')}>
            <Col xs={left?.xs} sm={left?.sm} md={left?.md} lg={left?.lg} className="left-side">
                {header}
            </Col>

            <Col xs={right?.xs} sm={right?.sm} md={right?.md} lg={right?.lg} className="right-side">
                <div onClick={e => e?.stopPropagation()}>{rightSideHeader}</div>
                {showExpandIcon && <FaIcon fa="r-angle-down" />}
            </Col>
        </Row>
    ) : (
        <div />
    );

    return (
        <div className={classNames(`box-layout ${className}`, { expanded: expanded })}>
            <div className="top-right-component">{componentTopRight}</div>
            <PanelLoader loading={loading}>
                <Panel
                    header={boxHeader}
                    expanded={expanded}
                    collapsible={expandable}
                    className={classNames(`box ${bgColor}`, {
                        shaded: shaded,
                        'show-expand-icon': showExpandIcon,
                        'hover-shadow': shadowOnHover,
                    })}
                >
                    <div className="box-body">{children}</div>
                </Panel>
            </PanelLoader>
        </div>
    );
};

export default Box;
