import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { healthDescription } from './resources/health';

export class OnschedUtility implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'onsched-utility',
		name: 'N8nDevOnschedUtility',
		icon: { light: 'file:./onsched-utility.svg', dark: 'file:./onsched-utility.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Endpoints for system utilities. e.g.Health',
		defaults: { name: 'onsched-utility' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOnschedUtilityApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Health",
					"value": "Health",
					"description": ""
				}
			],
			"default": ""
		},
		...healthDescription
		],
	};
}
