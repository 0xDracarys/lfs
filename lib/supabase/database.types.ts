export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          name: string | null
          email: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name?: string | null
          email: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          email?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      builds: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          os_name: string
          kernel_version: string
          ram_allocation: number
          disk_size: number
          packages: Json
          docker_enabled: boolean
          docker_options: Json
          status: string
          progress: number
          logs: Json
          created_at: string
          started_at: string | null
          completed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          os_name: string
          kernel_version: string
          ram_allocation?: number
          disk_size?: number
          packages?: Json
          docker_enabled?: boolean
          docker_options?: Json
          status?: string
          progress?: number
          logs?: Json
          created_at?: string
          started_at?: string | null
          completed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          os_name?: string
          kernel_version?: string
          ram_allocation?: number
          disk_size?: number
          packages?: Json
          docker_enabled?: boolean
          docker_options?: Json
          status?: string
          progress?: number
          logs?: Json
          created_at?: string
          started_at?: string | null
          completed_at?: string | null
        }
      }
      templates: {
        Row: {
          id: string
          name: string
          description: string | null
          category: string
          popularity: number
          downloads: number
          author: string | null
          verified: boolean
          packages: Json
          kernel_version: string
          docker: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          category: string
          popularity?: number
          downloads?: number
          author?: string | null
          verified?: boolean
          packages?: Json
          kernel_version: string
          docker?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          category?: string
          popularity?: number
          downloads?: number
          author?: string | null
          verified?: boolean
          packages?: Json
          kernel_version?: string
          docker?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      docker_images: {
        Row: {
          id: string
          user_id: string
          name: string
          tag: string
          size: string | null
          created_at: string
          ports: Json
          status: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          tag: string
          size?: string | null
          created_at?: string
          ports?: Json
          status?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          tag?: string
          size?: string | null
          created_at?: string
          ports?: Json
          status?: string
        }
      }
      docker_containers: {
        Row: {
          id: string
          user_id: string
          name: string
          image: string
          status: string
          created_at: string
          ports: string | null
          cpu: string | null
          memory: string | null
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          image: string
          status?: string
          created_at?: string
          ports?: string | null
          cpu?: string | null
          memory?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          image?: string
          status?: string
          created_at?: string
          ports?: string | null
          cpu?: string | null
          memory?: string | null
        }
      }
      user_settings: {
        Row: {
          user_id: string
          theme: string
          timezone: string
          notifications: Json
          security: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          theme?: string
          timezone?: string
          notifications?: Json
          security?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          theme?: string
          timezone?: string
          notifications?: Json
          security?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
