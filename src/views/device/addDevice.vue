<template>
	<div class="add-device">
		<!--header-->
		<mu-appbar title='添加设备' class='header'>
			<router-link to='/devices' slot='left'>
				<mu-icon-button icon='keyboard_arrow_left' style='color: #fff'/>
			</router-link>
		</mu-appbar>
		<div class="page-part">
			<mu-text-field label="设备名称" hintText="请输入设备名称" v-model="deviceinfo.device_name"></mu-text-field></br>
			<mu-text-field label="设备序列号" hintText="请输入设备序列号" v-model="deviceinfo.serial"></mu-text-field></br>
			<!--<mu-text-field label="设备密码" hintText="请输入设备密码" type="password" v-model="deviceinfo.password"></mu-text-field></br>-->
			<mu-select-field class='select' v-model="deviceGroup" label="请选择设备组">
				<mu-menu-item v-for='text,index in list' :key='index' :value='index' :title='text' />
			</mu-select-field>
		</div>
		<mu-raised-button label="保存" class="demo-raised-button" primary @click='addDevice'/>
    </div>
</template>

<script>
export default {
	data () {
		return {
			deviceinfo: {
				device_name: '',
				serial: '',
				password: ''
			},
			deviceGroup: 0,
			list: ['我的设备']
		}
	},
	mounted () {
		
	},
	methods: {
		/*back() {
			this.$router.go(-1);
			//this.$router.push({ path: '/devices' });
		},*/
		addDevice() {
			console.log(this.deviceinfo);
			this.$store.dispatch('addDevice', this.deviceinfo).then(() => {
				console.log('添加设备成功！');
				this.$store.dispatch('getDevices')
				this.$router.push({ path: '/devices' });
			}).catch(err => {
				console.log('添加设备失败!');
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
.select {
	text-align: left;
}
.add-device {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 200;
	background-color: #fff;
	.page-part {
		padding-top: 62px;
	}
}
</style>