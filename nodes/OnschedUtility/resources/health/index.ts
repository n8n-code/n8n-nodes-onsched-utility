import type { INodeProperties } from 'n8n-workflow';

export const healthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					]
				}
			},
			"options": [
				{
					"name": "GET Utility V 1 Health Heartbeat",
					"value": "GET Utility V 1 Health Heartbeat",
					"action": "GET Utility V 1 Health Heartbeat",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/utility/v1/health/heartbeat"
						}
					}
				},
				{
					"name": "GET Utility V 1 Health Threadinfo",
					"value": "GET Utility V 1 Health Threadinfo",
					"action": "GET Utility V 1 Health Threadinfo",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/utility/v1/health/threadinfo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /utility/v1/health/heartbeat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"GET Utility V 1 Health Heartbeat"
					]
				}
			}
		},
		{
			"displayName": "GET /utility/v1/health/threadinfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"GET Utility V 1 Health Threadinfo"
					]
				}
			}
		},
];
