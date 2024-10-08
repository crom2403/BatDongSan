import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import PropTypes from "prop-types"

const CustomTooltip = ({ content, trigger }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
CustomTooltip.propTypes = {
  trigger: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
}
