import { Task } from "../task/Task"
import { HandleError, PushToolResult, RemoveClosingTag, AskApproval } from "../../shared/tools"

export async function getTaskIdTool(
	cline: Task,
	block: {
		params: {} // 不需要参数
	},
	askApproval: AskApproval,
	handleError: HandleError,
	pushToolResult: PushToolResult,
	_: RemoveClosingTag,
) {
	try {
		// 直接返回当前Task的instanceId
		const taskId = cline.instanceId
		pushToolResult(`<task_id>${taskId}</task_id>`)
	} catch (err) {
		const errorMsg = err instanceof Error ? err.message : "Failed to get task ID"
		pushToolResult(`<task_id><error>${errorMsg}</error></task_id>`)
		await handleError("getting task ID", err)
	}
}
