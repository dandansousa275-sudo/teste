export type CreationMode="title"|"script";
export type ProjectStatus="draft"|"generating_script"|"preparing_scenes"|"generating_images"|"generating_animations"|"generating_narration"|"rendering"|"completed"|"error";
export interface ProjectSettings{language:string;videoStyle:string;visualStyle:string;voice:string;speed:number;backgroundMusic:boolean;subtitles:boolean;resolution:"1920x1080"|"1080x1920"|"1080x1080";fps:number;quality:string;automatic:boolean}
export interface Scene{id:number;projectId:string;narration:string;visualDescription:string;estimatedDuration:number;context:string;characters:string[];environment:string;era:string;visualStyle:string;imagePrompt:string;animationPrompt:string;status:string;imageUrl?:string;videoUrl?:string;audioUrl?:string}
export interface Project{id:string;title:string;mode:CreationMode;script:string;status:ProjectStatus;progress:number;duration:number;thumbnailUrl?:string;settings:ProjectSettings;scenes:Scene[];createdAt:string;updatedAt:string}
