export function getTaskIdDescription(): string {
	return `## get_task_id  
Description: 提取当前Task实例的instanceId。该工具无需参数，直接从当前Task对象获取ID。

Parameters: 无需参数

Usage:
<get_task_id>
</get_task_id>

Examples:

1. 获取当前Task ID
<get_task_id>
</get_task_id>

Note: 
- 该工具从Task对象直接读取instanceId属性
- 如果获取失败会返回错误信息`
}

export function getParentTaskIdDescription(): string {
	return `## get_parent_task_id  
Description: 提取当前Task实例的父任务instanceId。该工具无需参数，直接从当前Task对象的父任务获取ID。

Parameters: 无需参数

Usage:
<get_parent_task_id>
</get_parent_task_id>

Examples:

1. 获取父任务ID
<get_parent_task_id>
</get_parent_task_id>

Note: 
- 该工具从Task对象的parentTask属性读取instanceId
- 如果没有父任务则返回空字符串
- 如果获取失败会返回错误信息`
}
